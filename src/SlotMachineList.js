import React from 'react';
import PropTypes from 'prop-types';

class SlotMachineList extends React.PureComponent {
  render() {
    return (
      <div className="SlotMachineList">
        <div className="SlotMachineList__item">
          <img src="/img/loss.svg" alt="" />
          Unlucky
          <div className="SlotMachineList__item__matches">1/3</div>
        </div>
        <div className="SlotMachineList__item">
          <img src="/img/loss.svg" alt="" />
          Close call
          <div className="SlotMachineList__item__matches">2/3</div>
        </div>
        <div className="SlotMachineList__item SlotMachineList__item--win">
          <img src="/img/win.svg" alt="" />
          You win!
          <div className="SlotMachineList__item__matches">3/3</div>
        </div>
        <div className="SlotMachineList__item">
          <img src="/img/loss.svg" alt="" />
          Unlucky
          <div className="SlotMachineList__item__matches">1/3</div>
        </div>
        <div className="SlotMachineList__item">
          <img src="/img/loss.svg" alt="" />
          Unlucky
          <div className="SlotMachineList__item__matches">1/3</div>
        </div>
        <div className="SlotMachineList__item">
          <img src="/img/loss.svg" alt="" />
          Unlucky
          <div className="SlotMachineList__item__matches">1/3</div>
        </div>
      </div>
    );
  }
}

SlotMachineList.propTypes = {};

export default SlotMachineList;
