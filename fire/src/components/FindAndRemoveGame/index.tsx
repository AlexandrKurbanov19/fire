import { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './styles.css';
import { Link } from 'react-router-dom';

type LocationType = 'room' | 'garage' | 'kitchen';

interface DangerousItem {
  id: number;
  type: string;
  left: number;
  top: number;
}

interface DragItem {
  id: number;
  type: string;
  left: number;
  top: number;
}

const ItemTypes = {
  DANGER: 'danger'
};

const GameBoard = () => {
  const [score, setScore] = useState(0);
  const [items, setItems] = useState<DangerousItem[]>([]);
  const [location, setLocation] = useState<LocationType>('room');

  const moveItem = (id: number, left: number, top: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, left, top } : item
    ));
  };

  const DraggableItem = ({ id, type, left, top }: DangerousItem) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: ItemTypes.DANGER,
      item: { id, type, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      })
    }));

    const [, drop] = useDrop(() => ({
      accept: ItemTypes.DANGER,
      drop: (item: DragItem) => {
        const { id } = item;
        moveItem(id, left, top);
      },
    }));

    return (
      <div
        ref={node => drag(drop(node))}
        className={`danger-item ${type}`}
        style={{
          left: `${left}%`,
          top: `${top}%`,
          opacity: isDragging ? 0.5 : 1,
          cursor: 'move',
          position: 'absolute',
        }}
      />
    );
  };

  const TrashBin = () => {
    const [{ isOver }, drop] = useDrop(() => ({
      accept: ItemTypes.DANGER,
      drop: (item: DragItem) => {
        setItems(items.filter(i => i.id !== item.id));
        setScore(s => s + 100);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver()
      })
    }));

    return (
      <div 
        ref={drop}
        className={`trash-bin ${isOver ? 'active' : ''}`}
      >
        🗑️
      </div>
    );
  };

  const generateItems = () => {
    const itemsData = [];
    const positions = new Set<string>();
    
    for (let i = 0; i < 8; i++) {
      let x, y;
      do {
        x = Math.floor(Math.random() * 70) + 10;
        y = Math.floor(Math.random() * 60) + 10;
      } while (positions.has(`${x}-${y}`));
      
      positions.add(`${x}-${y}`);
      
      itemsData.push({
        id: i,
        type: getRandomItemType(location),
        left: x,
        top: y
      });
    }
    
    setItems(itemsData);
  };

  const getRandomItemType = (location: LocationType) => {
    const itemsByLocation = {
      room: ['socket', 'candle', 'heater', 'wires'],
      garage: ['gas', 'oil', 'tools', 'paint'],
      kitchen: ['socket', 'candle', 'tools', 'paint']
    };
    
    return itemsByLocation[location][Math.floor(Math.random() * 4)];
  };

  useEffect(() => {
    generateItems();
  }, [location]);

  return (
    <div className={`game-board ${location}`}>
      <div className="location-selector">
        <button onClick={() => setLocation('room')}>Комната</button>
        <button onClick={() => setLocation('garage')}>Гараж</button>
        <button onClick={() => setLocation('kitchen')}>Кухня</button>
        <Link to='/'>Вернуться назад</Link>
      </div>
      
      <div className="game-header">
        <div>Очки: {score}</div>
        <TrashBin />
      </div>

      {items.map(item => (
        <DraggableItem
          key={item.id}
          id={item.id}
          type={item.type}
          left={item.left}
          top={item.top}
        />
      ))}
    </div>
  );
};

export default function FindAndRemoveGame() {
  return (
    <DndProvider backend={HTML5Backend}>
      <GameBoard />
    </DndProvider>
  );
}