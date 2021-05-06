import React from 'react';
import './CSS/Assignment.css'
import './CSS/easyframer.css'


const  Header = (props) => {
    return (
        <>
            <h1
                className={props.headerClassName}
            >
                {props.content}
            </h1>
        </>
    )
}

const List = props => {
    const items = props.items.map((item , index) =>
        <li key={index} className="m-b-1 "> {item} </li>
    )
    return (
        <>
            <h2 className="light-blue-text">{props.title}</h2>
            {props.ordered ? <ul>{items}</ul> : <ol>{items}</ol>}
        </>
    )
}
const fruits = ['Apple', 'Mango', 'Grapes', 'Pineapple', 'Orange'];
const list = [
    "<ol>",
    "<li>Apple<li>",
    "<li>Mango<li>",
    "<li>Grapes<li>",
    "<li>Pineapple<li>",
    "<li>Orange<li>",
    "</ol>"
]
    
export default function App(props){
    return (
        <React.Fragment>
            <div className="framer">
                <div className="frame">
                    <div className="fr-3"></div>
                    <div className="fr-6 bg-white white-text ">
                        <div className="bg-dark pad-well">
                            <Header content="ORDERED LIST" headerClassName="orange-text"/>
                            <div className="row">
                                <div className="col-md-6">
                                    <List 
                                    items={list} 
                                    ordered={true}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <List 
                                    items={fruits} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}