import React, {useState} from "react";
import {Modal} from "../../Components/ReactDimmerMenu/Modal";
import {ReactDimmer} from "react-dimmer";

const About =() =>{
    const [isModalOpen, setModal] = useState(false);
    const handleClick = () => {
        setModal((prevState) => !prevState);
    };

    return(
        <>
            <div>
                This is About Page
                <button onClick={handleClick}>Open Modal</button>
            </div>
            {isModalOpen && <Modal closeModal={setModal}/>}
            <ReactDimmer
                isOpen={isModalOpen}
                exitDimmer={setModal}
                zIndex={100}
                blur={1.5}
            />
        </>

    );
}
export default About;