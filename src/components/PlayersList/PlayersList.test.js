import PlayersList from './PlayersList';
import React from 'react';
import { shallow } from 'enzyme';

it('should render app without crashing', () => {
  shallow(<PlayersList players={[]} />);
});

it('should render players list', () => {
  const players = [
      {
        name: 'Kunegunda',
        score: 5
      },
      {
        name: 'Antoś',
        score: 0
      }
    ],
    playerComponent = shallow(<PlayersList players={players} />),
    expectedPlayersNumber = playerComponent.find('Player').length;
  expect(expectedPlayersNumber).toEqual(2);
});

it('should call onScoreUpdate with correct values', () => {
  const players = [
      {
        name: 'Kunegunda',
        score: 5
      },
      {
        name: 'Antoś',
        score: 0
      }
    ],
    mockedOnScoreUpdate = jest.fn(),
    playerComponent = shallow(
      <PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />
    ),
    firstPlayer = playerComponent.find('Player').first(),
    onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');
  onPlayerScoreChange(69);
  expect(mockedOnScoreUpdate).toBeCalledWith(0, 69);
});

it('should call onDelete with correct values', () => {
  const players = [
      {
        name: 'Kunegunda',
        score: 5
      },
      {
        name: 'Antoś',
        score: 0
      }
    ],
    mockedOnDelete = jest.fn(),
    playerComponent = shallow(
      <PlayersList players={players} onDelete={mockedOnDelete} />
    ),
    firstPlayer = playerComponent.find('Player').first(),
    onPlayerDelete = firstPlayer.prop('onPlayerDelete');
  onPlayerDelete();
  expect(mockedOnDelete).toBeCalledWith(0);
});