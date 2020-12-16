import React, {Component} from 'react';
import {Card, CardImg,  CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if(dish != null) {
            return (
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else { 
            return (
                <div></div>
            );
        }
    }

    renderComments(dish) {
        if(dish != null) {
            return (<div>
                <h4>Comments</h4>
                {
                    dish.comments.map((comment) => {
                        return (
                            <div  key={comment.id}>
                                <lu>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author},{comment.date}</p>
                                </lu>
                            </div>
                        )
                    })
                }
            </div>);
        }
        else { 
            return (
                <div></div>
            );
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        );
    }

}

export default DishDetail;