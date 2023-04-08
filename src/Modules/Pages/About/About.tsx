import React, {useState} from "react";
import {Modal} from "../../Components/ReactDimmerMenu/Modal";
import {ReactDimmer} from "react-dimmer";
import svg from "./asset/funnel-svgrepo-com.svg";
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
                <div style={{width:'50px',height:'50px'}}>
                    <svg fill="#000000"  viewBox="0 0 24 24" id="funnel"
                         data-name="Flat Line"
                         xmlns="http://www.w3.org/2000/svg" className="icon flat-line">
                        <path id="secondary"
                              d="M19,4V6.64a1,1,0,0,1-.23.64l-4.54,5.44a1,1,0,0,0-.23.64V21l-4-2V13.36a1,1,0,0,0-.23-.64L5.23,7.28A1,1,0,0,1,5,6.64V4A1,1,0,0,1,6,3H18A1,1,0,0,1,19,4Z"
                              fill="fill: rgb(44, 169, 188); stroke-width: 2;"
                        ></path>
                    </svg>
                </div>
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