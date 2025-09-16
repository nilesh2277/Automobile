import "./CarThumbnails.css";

const cars = [
  { id: 1, name: "Sports Car", img: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg" },
  { id: 2, name: "Luxury Car", img: "https://images.unsplash.com/photo-1549924231-f129b911e442" },
  { id: 3, name: "Classic Car", img: "https://cdn.pixabay.com/photo/2016/11/22/23/30/automobile-1851246_960_720.jpg" },
  { id: 4, name: "Compact Car", img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d" },
];

function CarThumbnails() {
  return (
    <div className="thumbnail-grid">
      {cars.map(car => (
        <div key={car.id} className="thumbnail-card">
          <img src={car.img} alt={car.name} className="thumbnail-img" />
          <div className="thumbnail-overlay">
            <p>{car.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarThumbnails;
