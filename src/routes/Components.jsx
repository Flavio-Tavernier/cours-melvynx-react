function ShoeCard(props) {
  return (
    <div className="card w-full bg-neutral shadow-md">
      <figure>
        <img className="h-32 w-full object-cover" src={props.image} />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2">
          <h2 className="card-title">{props.title}</h2>
          {props.isNew ? <div className="badge badge-primary">new</div> : null}
        </div>
      </div>
    </div>
  );
}

const SHOES = [
  {
    image: "/images/shoes-1.png",
    title: "Requin",
    isNew: true,
    id: 1,
  },
  {
    image: "/images/shoes-2.png",
    title: "Requin 2",
    isNew: false,
    id: 2,
  },
  {
    image: "/images/shoes-3.png",
    title: "Requin",
    isNew: false,
    id: 3,
  },
];

export default function Components() {
  return (
    <div className="flex flex-col gap-4 items-start">
      {SHOES.map(shoe => (
        <ShoeCard key={shoe.id} {...shoe}/>
      ))}
    </div>
  );
}
