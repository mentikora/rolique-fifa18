import React from 'react'
import './styles.css'

type ITeam = {
  name: string;
  country: string;
}

const Team: React.FunctionComponent<ITeam> = (props) => {
  const { name, country , children} = props;
  return (
    <div className="team">
      <span className="team__counter">{children}</span>
      <span className="team__name">{name}</span>
      <span className="team__country">( {country} )</span>
    </div>
  )
};

export const Picker: React.FunctionComponent = () => {
  const teams: Array<ITeam> = [
    {name: 'Shakhtar Donetsk', country: 'Ukraine'},
    {name: 'Juventus', country: 'Italy'},
    {name: 'SL Benfica', country: 'Portugal'},
    {name: 'Lazio', country: 'Italy'},
    {name: 'Dortmund', country: 'Germany'},
    {name: 'Napoli', country: 'Italy'},
    {name: 'Villarreal CF', country: 'Spain'},
    {name: 'Arsenal', country: 'England'},
    {name: 'OL', country: 'France'},
    {name: 'Valencia CF', country: 'Spain'},
    {name: 'Leverkusen', country: 'Germany'},
    {name: 'FC Porto', country: 'Portugal'},
    {name: 'Inter', country: 'Italy'},
    {name: 'Everton', country: 'England'},
    {name: 'Barselona', country: 'Spain'},
    {name: 'Dynamo K', country: 'Ukraine'},
  ];

  const shuffle = (arr: Array<ITeam>) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const pickTeam = (arr: Array<ITeam>) => {
    const min = 0;
    const max = arr.length - 1;
    let random = min + Math.random() * (max + 1 - min);
    console.log(Math.floor(random))
    return arr[Math.floor(random)];
  }

  const getTeams = () => {
    const t1 = pickTeam(shuffledTeams);
    setT1Team(t1);
    const t2 = pickTeam(shuffledTeams);
    setT2Team(t2);
    shuffle(shuffledTeams);
  }

  const [shuffledTeams, setTeams] = React.useState();
  const [T1Team, setT1Team] = React.useState<ITeam>();
  const [T2Team, setT2Team] = React.useState<ITeam>();

  React.useEffect(() => {
    const temp = shuffle(teams)
    setTeams(temp);
  }, []);

  return <div className="team-picker">
    <div className="team team-one">
      {T1Team && <Team {...T1Team}>Team 1 (top)</Team>}
    </div>
    <div className="teams-list">
      <button
        type="button"
        className="button"
        onClick={() => getTeams()}
      >
        get teams
      </button>
      <ul>
        {
          !!shuffledTeams && shuffledTeams.map((i: ITeam) => <li key={i.name}><span>{i.name}</span><span className="teams-list__team-country">{i.country}</span></li>)
        }
      </ul>
    </div>
    <div className="team team-one">
      {T2Team && <Team {...T2Team}>Team 2 (bottom)</Team>}
    </div>
  </div>
}
