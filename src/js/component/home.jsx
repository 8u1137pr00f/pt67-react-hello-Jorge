import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer"

//create your first component
const Home = () => {

	const cardData = [
		{ imageUrl: "https://picsum.photos/id/26/600/800?grayscale", title: "Card 1", text: "In this image we can see a few common objects, usually related to masculine fashion trends." },
		{ imageUrl: "https://picsum.photos/id/29/600/800?grayscale", title: "Card 2", text: "Without colours, it becomes harder to guess where these mountains might be approximately located, right?" },
		{ imageUrl: "https://picsum.photos/id/48/600/800?grayscale", title: "Card 3", text: "Apple is overpriced and overrated due to marketing strategies, change my mind!" },
		{ imageUrl: "https://picsum.photos/id/151/600/800?grayscale", title: "Card 4", text: "Is it the Sun? Or perhaps this is a really powerful lantern pointing at the camera?" },
	]
	return (
		<>
			<div className="container-flex bg-dark px-3">
				<Navbar />
			</div>
			<div className="container">
				<Jumbotron />
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 my-3">
					{cardData.map((card, index) => (
						<div className="col" key={index}>
							<Card imageUrl={card.imageUrl} title={card.title} text={card.text}/>
						</div>
					))
					}
					
				</div>
			</div>
			<div className="row bg-dark text-light px-3">
				<Footer />
			</div>
		</>
	);
};

export default Home;
