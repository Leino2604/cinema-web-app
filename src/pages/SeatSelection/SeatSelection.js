import React, {useState} from 'react';
import './SeatStyle.css'

function SeatSelection() {

  const [state, setState] = useState([
    { id: 1, isSelected: false },
    { id: 2, isSelected: false },
    { id: 3, isSelected: false },
    { id: 4, isSelected: false },
    { id: 5, isSelected: false },
    { id: 6, isSelected: false },
    { id: 7, isSelected: false },
    { id: 8, isSelected: false },

    { id: 11, isSelected: false },
    { id: 12, isSelected: false },
    { id: 13, isSelected: false },
    { id: 14, isSelected: false },
    { id: 15, isSelected: false },
    { id: 16, isSelected: false },
    { id: 17, isSelected: false },
    { id: 18, isSelected: false },

    { id: 21, isSelected: false },
    { id: 22, isSelected: false },
    { id: 23, isSelected: false },
    { id: 24, isSelected: false },
    { id: 25, isSelected: false },
    { id: 26, isSelected: false },
    { id: 27, isSelected: false },
    { id: 28, isSelected: false },

    { id: 31, isSelected: false },
    { id: 32, isSelected: false },
    { id: 33, isSelected: false },
    { id: 34, isSelected: false },
    { id: 35, isSelected: false },
    { id: 36, isSelected: false },
    { id: 37, isSelected: false },
    { id: 38, isSelected: false },

    { id: 41, isSelected: false },
    { id: 42, isSelected: false },
    { id: 43, isSelected: false },
    { id: 44, isSelected: false },
    { id: 45, isSelected: false },
    { id: 46, isSelected: false },
    { id: 47, isSelected: false },
    { id: 48, isSelected: false },

    { id: 51, isSelected: false },
    { id: 52, isSelected: false },
    { id: 53, isSelected: false },
    { id: 54, isSelected: false },
    { id: 55, isSelected: false },
    { id: 56, isSelected: false },
    { id: 57, isSelected: false },
    { id: 58, isSelected: false },

    { id: 61, isSelected: false },
    { id: 62, isSelected: false },
    { id: 63, isSelected: false },
    { id: 64, isSelected: false },
    { id: 65, isSelected: false },
    { id: 66, isSelected: false },
    { id: 67, isSelected: false },
    { id: 68, isSelected: false },

    { id: 71, isSelected: false },
    { id: 72, isSelected: false },
    { id: 73, isSelected: false },
    { id: 74, isSelected: false },
    { id: 75, isSelected: false },
    { id: 76, isSelected: false },
    { id: 77, isSelected: false },
    { id: 78, isSelected: false },
  ]);

  const toggle = (id) => {
    setState(
      state.map((seat) =>
        seat.id === id ? { ...seat, isSelected: !seat.isSelected } : seat
      )
    );
  };

  const numSelectedSeats = state.reduce((total, seat) => {
    return seat.isSelected ? total + 1 : total;
  }, 0);

  return (
    <div className="App">
        <h1>Please choose your seat</h1>
        <div className="Description">
            <h2>
              <div className="SeatStatus"></div>
              <span>  Available </span>
              <div className="SeatStatus" style={{backgroundColor: 'rgb(102, 204, 255)'}}></div>
              <span>  Selected    </span>
              <div className="SeatStatus" style={{backgroundColor: 'blue'}}></div>
              <span>  Occupied  </span>
            </h2>
        </div>
        <div className='Container'>
          <div className="Row">
            <button onClick={() => toggle(1)} className={"Seat" + (state[0].isSelected ? " Selected" : "")}>A1</button>
            <button onClick={() => toggle(2)} className={"Seat" + (state[1].isSelected ? " Selected" : "")}>A2</button>
            <button onClick={() => toggle(3)} className={"Seat" + (state[2].isSelected ? " Selected" : "")}>A3</button>
            <button onClick={() => toggle(4)} className={"Seat" + (state[3].isSelected ? " Selected" : "")}>A4</button>
            <button onClick={() => toggle(5)} className={"Seat" + (state[4].isSelected ? " Selected" : "")}>A5</button>
            <button onClick={() => toggle(6)} className={"Seat" + (state[5].isSelected ? " Selected" : "")}>A6</button>
            <button onClick={() => toggle(7)} className={"Seat" + (state[6].isSelected ? " Selected" : "")}>A7</button>
            <button onClick={() => toggle(8)} className={"Seat" + (state[7].isSelected ? " Selected" : "")}>A8</button>
          </div>
          <div className="Row">
            <button onClick={() => toggle(11)} className={"Seat" + (state[8].isSelected ? " Selected" : "")}>B1</button>
            <button onClick={() => toggle(12)} className={"Seat" + (state[9].isSelected ? " Selected" : "")}>B2</button>
            <button onClick={() => toggle(13)} className={"Seat" + (state[10].isSelected ? " Selected" : "")}>B3</button>
            <button onClick={() => toggle(14)} className={"Seat" + (state[11].isSelected ? " Selected" : "")}>B4</button>
            <button onClick={() => toggle(15)} className={"Seat" + (state[12].isSelected ? " Selected" : "")}>B5</button>
            <button onClick={() => toggle(16)} className={"Seat" + (state[13].isSelected ? " Selected" : "")}>B6</button>
            <button onClick={() => toggle(17)} className={"Seat" + (state[14].isSelected ? " Selected" : "")}>B7</button>
            <button onClick={() => toggle(18)} className={"Seat" + (state[15].isSelected ? " Selected" : "")}>B8</button>
          </div>
          <div className="Row">
            <button onClick={() => toggle(21)} className={"Seat" + (state[16].isSelected ? " Selected" : "")}>C1</button>
            <button onClick={() => toggle(22)} className={"Seat" + (state[17].isSelected ? " Selected" : "")}>C2</button>
            <button onClick={() => toggle(23)} className={"Seat" + (state[18].isSelected ? " Selected" : "")}>C3</button>
            <button onClick={() => toggle(24)} className={"Seat" + (state[19].isSelected ? " Selected" : "")}>C4</button>
            <button onClick={() => toggle(25)} className={"Seat" + (state[20].isSelected ? " Selected" : "")}>C5</button>
            <button onClick={() => toggle(26)} className={"Seat" + (state[21].isSelected ? " Selected" : "")}>C6</button>
            <button onClick={() => toggle(27)} className={"Seat" + (state[22].isSelected ? " Selected" : "")}>C7</button>
            <button onClick={() => toggle(28)} className={"Seat" + (state[23].isSelected ? " Selected" : "")}>C8</button>
          </div>
          <div className="Row">
            <button onClick={() => toggle(31)} className={"Seat" + (state[24].isSelected ? " Selected" : "")}>D1</button>
            <button onClick={() => toggle(32)} className={"Seat" + (state[25].isSelected ? " Selected" : "")}>D2</button>
            <button onClick={() => toggle(33)} className={"Seat" + (state[26].isSelected ? " Selected" : "")}>D3</button>
            <button onClick={() => toggle(34)} className={"Seat" + (state[27].isSelected ? " Selected" : "")}>D4</button>
            <button onClick={() => toggle(35)} className={"Seat" + (state[28].isSelected ? " Selected" : "")}>D5</button>
            <button onClick={() => toggle(36)} className={"Seat" + (state[29].isSelected ? " Selected" : "")}>D6</button>
            <button onClick={() => toggle(37)} className={"Seat" + (state[30].isSelected ? " Selected" : "")}>D7</button>
            <button onClick={() => toggle(38)} className={"Seat" + (state[31].isSelected ? " Selected" : "")}>D8</button>
          </div>
          <div className="Row">
            <button onClick={() => toggle(41)} className={"Seat" + (state[32].isSelected ? " Selected" : "")}>E1</button>
            <button onClick={() => toggle(42)} className={"Seat" + (state[33].isSelected ? " Selected" : "")}>E2</button>
            <button onClick={() => toggle(43)} className={"Seat" + (state[34].isSelected ? " Selected" : "")}>E3</button>
            <button onClick={() => toggle(44)} className={"Seat" + (state[35].isSelected ? " Selected" : "")}>E4</button>
            <button onClick={() => toggle(45)} className={"Seat" + (state[36].isSelected ? " Selected" : "")}>E5</button>
            <button onClick={() => toggle(46)} className={"Seat" + (state[37].isSelected ? " Selected" : "")}>E6</button>
            <button onClick={() => toggle(47)} className={"Seat" + (state[38].isSelected ? " Selected" : "")}>E7</button>
            <button onClick={() => toggle(48)} className={"Seat" + (state[39].isSelected ? " Selected" : "")}>E8</button>
          </div>
          <div className="Row">
            <button onClick={() => toggle(51)} className={"Seat" + (state[40].isSelected ? " Selected" : "")}>F1</button>
            <button onClick={() => toggle(52)} className={"Seat" + (state[41].isSelected ? " Selected" : "")}>F2</button>
            <button onClick={() => toggle(53)} className={"Seat" + (state[42].isSelected ? " Selected" : "")}>F3</button>
            <button onClick={() => toggle(54)} className={"Seat" + (state[43].isSelected ? " Selected" : "")}>F4</button>
            <button onClick={() => toggle(55)} className={"Seat" + (state[44].isSelected ? " Selected" : "")}>F5</button>
            <button onClick={() => toggle(56)} className={"Seat" + (state[45].isSelected ? " Selected" : "")}>F6</button>
            <button onClick={() => toggle(57)} className={"Seat" + (state[46].isSelected ? " Selected" : "")}>F7</button>
            <button onClick={() => toggle(58)} className={"Seat" + (state[47].isSelected ? " Selected" : "")}>F8</button>
          </div>
          <div className="Row">
            <button onClick={() => toggle(61)} className={"Seat" + (state[48].isSelected ? " Selected" : "")}>G1</button>
            <button onClick={() => toggle(62)} className={"Seat" + (state[49].isSelected ? " Selected" : "")}>G2</button>
            <button onClick={() => toggle(63)} className={"Seat" + (state[50].isSelected ? " Selected" : "")}>G3</button>
            <button onClick={() => toggle(64)} className={"Seat" + (state[51].isSelected ? " Selected" : "")}>G4</button>
            <button onClick={() => toggle(65)} className={"Seat" + (state[52].isSelected ? " Selected" : "")}>G5</button>
            <button onClick={() => toggle(66)} className={"Seat" + (state[53].isSelected ? " Selected" : "")}>G6</button>
            <button onClick={() => toggle(67)} className={"Seat" + (state[54].isSelected ? " Selected" : "")}>G7</button>
            <button onClick={() => toggle(68)} className={"Seat" + (state[55].isSelected ? " Selected" : "")}>G8</button>
          </div>
          <div className="Row">
            <button onClick={() => toggle(71)} className={"Seat" + (state[56].isSelected ? " Selected" : "")}>H1</button>
            <button onClick={() => toggle(72)} className={"Seat" + (state[57].isSelected ? " Selected" : "")}>H2</button>
            <button onClick={() => toggle(73)} className={"Seat" + (state[58].isSelected ? " Selected" : "")}>H3</button>
            <button onClick={() => toggle(74)} className={"Seat" + (state[59].isSelected ? " Selected" : "")}>H4</button>
            <button onClick={() => toggle(75)} className={"Seat" + (state[60].isSelected ? " Selected" : "")}>H5</button>
            <button onClick={() => toggle(76)} className={"Seat" + (state[61].isSelected ? " Selected" : "")}>H6</button>
            <button onClick={() => toggle(77)} className={"Seat" + (state[62].isSelected ? " Selected" : "")}>H7</button>
            <button onClick={() => toggle(78)} className={"Seat" + (state[63].isSelected ? " Selected" : "")}>H8</button>
          </div>
      </div>
      <div>
        <h2>Total seats selected: {numSelectedSeats}</h2>
      </div>
    </div>
  );
}


export default SeatSelection;