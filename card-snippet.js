
const Card = (props) =>{
return (
<div style={{margin:'1em'}}>
	<img width="75" src={props.avatar_url}/>
  	<div style={{display: 'inline-block', marginLeft:10}}>
    	<div style={{fontSize:'1.25em', fontWeight: 'bold'}}>{props.name}</div>
      <div>{props.company}</div>
    </div>
</div>
);

};

let data = [
{ name: "Rohit Sood",
avatar_url: "https://avatars2.githubusercontent.com/u/1330089?v=3",
company: "Liberty"},
{name: "Ben Sood",
avatar_url: "https://avatars2.githubusercontent.com/u/1330089?v=3",
company: "Liberty"}
];



const CardList = (props) =>{
return (
	<div>
  	{props.cardz.map(card => <Card {...card} />)}
  </div>
)
}


ReactDOM.render(<CardList cardz={data}/>, mountNode);
