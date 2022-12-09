import React, { Component } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai"
import { Col, Row, Button } from "react-bootstrap";

class Favoritegenres extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: [],
            categories: [],
            lengthFGeneres: 0,
            favoriteGenres: {},
            nullGenres: false,
            settingFGenres: false,
            setFGeneres: ""
        };
        this.genresclear = this.genresclear.bind(this);
        this.settingfgenres = this.settingfgenres.bind(this);
        this.setlengthFGeneres = this.setlengthFGeneres.bind(this);
    }
    setfgeneres(generes)  {
        this.setState({setFGeneres: generes});
    }
    setlengthFGeneres(length) {
        this.setState({lengthFGeneres: length})
    }

    componentDidMount() {
        this.getUserId();
    }

    genresclear() {
        this.setState({nullGenres : true})
    }

    settingfgenres() {
        this.setState({settingFGenres : !this.state.settingFGenres})
    }

    getUserId = async () => {
        const  token = localStorage.getItem("token");
        const res = await fetch("https://localhost:5001/api/Authenticate", {
            method: "GET",
            headers: {
                "accept":"text/json",
                "Authorization": "Bearer " + token,
            }
        })
        .then((response) => {
            if(!response.ok) throw new Error(response.status);
            else return response.json();
          })
        .then((data) => {
            this.setState({ user: data });
        })
        .catch((error) => {
        console.log('Ошибка получения данных о пользователя: ' + error);
        this.setState({ requestFailed: true });
        })
        if (this.state.user.id != undefined) {
            this.getCategories();
            this.getFavGenres(this.state.user.id);
            this.getFavGenresLeght();
            console.log("Данные о пользователе загружены")
        }
        else {
            this.getUserId();
        }
    }

    getFavGenres = async (userId) => {
        const res = await fetch(`https://localhost:7150/api/FavoriteCategories/${userId}`, {
            method: "GET",
            headers: {
                "accept":"text/json"
            }
        })
        .then((response) => {
            if(!response.ok) throw new Error(response.status);
            else return response.json();
          })
        .then((data) => {
            this.setState({ favoriteGenres: data });
            this.genresclear()
            console.log("Любимые жанры получены");
          })
          .catch((error) => {
            console.log('error: ' + error);
          })
          if (this.state.favoriteGenres != undefined) {
              console.log("Данные о пользователе загружены")
          }
          else {
            this.getFavGenres(userId)
          }
    }
    
    getCategories = async () => {
        const res = await fetch(`https://localhost:7150/api/Categories`, {
            method: "GET",
            headers: {
                "accept":"text/json"
            }
        })
        .then((response) => {
            if(!response.ok) throw new Error(response.status);
            else return response.json();
          })
        .then((data) => {
            this.setState({ categories: data });
            console.log("Категории игр загружены");
        })
        .catch((error) => {
            console.log('Ошибка загрузки категорий игр: ' + error);
            this.setState({ requestFailed: true });
        })
    }

    getFavGenresLeght = async () => {
        const res = await fetch("https://localhost:7150/api/FavoriteCategories", {
            method: "GET",
            headers: {
                "accept":"text/plain"
            }
        })
        .then((response) => {
            if(!response.ok) throw new Error(response.status);
            else return response.json();
          })
        .then((data) => {
            this.setlengthFGeneres( data.length );
            this.getFavGenres(this.state.user.id);
            console.log("Длинна предпочитаемых категорий загружена");
        })
        .catch((error) => {
        console.log('Ошибка получения колличества предпочитаемых жанров: ' + error);
        this.setState({ requestFailed: true });
        });
    }

    deleteFavGenres = async (favgenresId) => {
        const res = await fetch(`https://localhost:7150/api/FavoriteCategories/${favgenresId}`, {
            method: "DELETE",
            headers: {
                "accept": "*/*"
            }
        })
        .then((response) => {
            if(!response.ok) throw new Error(response.status);
            else console.log("Предпочитаемый жанр удлен")
            this.getFavGenresLeght();
            this.getFavGenres(this.state.user.id);
            
          })
        .catch((error) => {
            console.log('Ошибка удаления предпочитаемого жанра: ' + error);
        });
    }

    postFavGenres = async() => {
        if (this.state.setFGeneres.length > 0 )
        {
            const res = await fetch(`https://localhost:7150/api/FavoriteCategories`, {
                method: "POST",
                headers: {
                    "accept": "text/json",
                    "Content-Type":"application/json"                
                },
                body: JSON.stringify({
                    id : ++this.state.lengthFGeneres,
                    applicationUserId : this.state.user.id,
                    categoryId : this.state.setFGeneres
                }),
            })
            .then((response) => {
                if(!response.ok) throw new Error(response.status);
                else console.log("Категория добавлена")
                this.getFavGenresLeght();
                this.getFavGenres(this.state.user.id);
              })
            .catch((error) => {
                console.log('Ошибка добавления предпочитаемого жанра: ' + error);
            })
        }
        else {
            alert("Заполните все поля!")
        }
    };

    render(){
        const nullGenres = this.state.nullGenres;
        const settingFGenres = this.state.settingFGenres
        let userGenres
        if (nullGenres === true) {
            if (settingFGenres === true) {
                userGenres= (
                    <div>
                        <Row>
                            {this.state.favoriteGenres.map(el =>(
                                <Col className="col-4">
                                    <AiFillMinusCircle className="plus-genres-account" onClick={() => this.deleteFavGenres(el.id)}/>
                                    <h6 className="text-genres-account" value={el.id}>{el.category.name}</h6>
                                </Col>
                            ))}
                        </Row>
                        <Row>
                            <Row>
                                <Col>
                                    <div className="form-floating mb-3">
                                        <select class="form-select" id="formGroupExampleInputO" value={this.state.setFGeneres} onChange={(text) => this.setfgeneres(text.target.value)} placeholder="Категории">
                                            <option selected>Выберите категорию</option>
                                            {this.state.categories.map(el =>(
                                                <option value={el.id}>{el.name}</option>
                                            ))}
                                        </select>
                                        <label for="formGroupExampleInputO" className="text-color-dark">Категории</label>
                                    </div>
                                </Col>
                            </Row>
                            
                        </Row>
                        <Row>
                            <Button className="button-favoritegenres-save-setting" variant="outline-light" onClick={this.postFavGenres}>Добавить</Button>
                            <AiFillPlusCircle className="settings-img-button-favoritegenres-page" onClick={this.settingfgenres}/>
                        </Row>
                    </div>
                ) 
            }
            else {
                userGenres= (
                    <div>
                        <Row>
                            {this.state.favoriteGenres.map(el =>(
                                <Col className="col-4">
                                    <AiFillMinusCircle className="plus-genres-account" onClick={() => this.deleteFavGenres(el.id)}/>
                                    <h6 className="text-genres-account">{el.category.name}</h6>
                                </Col>
                            ))}
                        </Row>
                        <Row>
                            <AiFillPlusCircle className="settings-img-button-favoritegenres-page" onClick={this.settingfgenres}/>
                        </Row>
                    </div>
                    
                ) 
            }
           
        }
        
        return (
            <div className="div-block-userinfo">
                <div className="div-wrapper-userinfo">
                    <h3 className="text-align">ПРЕДПОЧИТАЕМЫЕ ЖАНРЫ ИГР</h3>
                    {userGenres}
                </div>
            </div>
        )
    }
    
}
export default Favoritegenres;