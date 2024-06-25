// inside of this component i don't want to repeat the h3 element 3 times the length of the array is 3 
// i want to render it only one time for the next two times 
// import { PDFToHTMLHOWTOType } from '@/src/how-to';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToolState } from '../src/store';
import { howToType } from '../src/how-to/how-to';


const HowTo = ({ howTo, alt, imgSrc }: {
    howTo: howToType, alt: string;
    imgSrc: string
}) => {
    const stateShowTool = useSelector(
        (state: { tool: ToolState }) => state.tool.showTool
    );
    useEffect(() => {
        console.log(stateShowTool, howTo)
    }, [stateShowTool])
    return (
        <>
            <div className={`how-to row align-items-center py-3${stateShowTool ? "" : " d-none"}`}>
                <div className="col-12 col-md-6 text-center image">
                    <picture>
                        <source srcSet={`/images/${imgSrc}-ad-xs.png`} media="(max-width: 575px)" />
                        <source srcSet={`/images/${imgSrc}-ad-md.png`} media="(min-width: 576px) and (max-width: 1199px)" />
                        <source srcSet={`/images/${imgSrc}-ad-xl.png`} media="(min-width: 1200px)" />
                        <img src={`/images/${imgSrc}-ad.png`} className="img-fluid" alt={alt} title={alt} />
                    </picture>

                </div>
                <div className="col how-to-steps">
                    <div itemScope itemType="http://schema.org/HowTo">
                        <h2 itemProp="name">{howTo.name}</h2>
                        <p itemProp="description">{howTo.description}</p>
                        {howTo.step.map((step, index) => (
                            <div key={index} itemScope itemType="http://schema.org/HowToStep">
                                {index === 0 ? <h3 itemProp="name">{step.name}</h3> : index === 1 ? <h4 className="h3" itemProp="name">{step.name}</h4> : index == 2 ? <h6 className="h3" itemProp="name">{step.name}</h6> : <div className="h3" itemProp="name">{step.name}</div>}
                                <p itemProp="text">{step.text}</p>
                                {/* {step.map((substep, subIndex) => (
                                    <p key={subIndex}>{substep}</p>
                                ))} */}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
};

export default HowTo;