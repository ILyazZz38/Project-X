import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function Slider() {
    
    return (
        <Carousel style={{'height':'450px', 'width':'800px'}}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://css-pro.ru/_ld/101/10184.jpg"
                    alt="Тут должен быть первый слайд"
                />
                <Carousel.Caption>
                    <h3>Counter-Strike: Source</h3>
                    <p>Игра в жанре многопользовательского командного шутера от первого лица, разработанная компаниями Valve</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://css-pro.ru/_ld/101/10184.jpg"
                    alt="Тут должен быть первый слайд"
                />
                <Carousel.Caption>
                    <h3>Counter-Strike: Source</h3>
                    <p>Игра в жанре многопользовательского командного шутера от первого лица, разработанная компаниями Valve</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://css-pro.ru/_ld/101/10184.jpg"
                    alt="Тут должен быть первый слайд"
                />
                <Carousel.Caption>
                    <h3>Counter-Strike: Source</h3>
                    <p>Игра в жанре многопользовательского командного шутера от первого лица, разработанная компаниями Valve</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
    
}