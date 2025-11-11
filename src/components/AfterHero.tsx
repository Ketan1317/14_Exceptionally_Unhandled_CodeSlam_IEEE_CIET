import img1 from "/rest1.png"
import img2 from "/rest2.png"


const AfterHero = () => {
  return (
    <div>
        <div className="flex items-center justify-center">
            <img src={img1} alt="" />
            <div>
                <h2>Reservations</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia architecto a ratione sit suscipit quos nobis, eveniet saepe excepturi.</p>
                <button>Book Now</button>
            </div>
        </div>
        <div className="flex items-center justify-center">
            <img src={img2} alt="" />
            <div>
                <h2>About</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam iure, earum exercitationem consequatur vero quae, tenetur possimus ex nesciunt doloribus magnam facere deleniti facilis dolore et ut reiciendis harum quod quia molestias voluptatibus assumenda accusamus debitis sit. Modi, tenetur cupiditate.</p>
            </div>
        </div>
    </div>
  )
}

export default AfterHero