import React from 'react';
import { useHistory } from 'react-router';

function Publish({sQuestion}) {
    const history = useHistory();
    return (
        <div>
            {sQuestion.length>0 ?
                sQuestion.map((item,itemIndex) => (
                    <div key={itemIndex} className="my-3" style={{fontFamily: "cursive"}}>
                        <h4>{item.question}</h4>
                        {item.options.map(opt => (
                            item.type===1 ?
                            <div key={opt.id} className="text-left m-auto" style={{width: "20%", whiteSpace: "nowrap"}}>
                                <input type="checkbox" id={opt.id}/>&nbsp;
                                <label htmlFor={opt.id}>{opt.value}</label>
                            </div> :
                            <div key={opt.id} className="text-left m-auto" style={{width: "20%", whiteSpace: "nowrap"}}>
                                <input type="radio" name="radio" id={opt.id}/>&nbsp;
                                <label htmlFor={opt.id}>{opt.value}</label>
                            </div>
                        ))}
                    </div>
                )) :
                <h4 className="text-center my-3 text-danger">No questions are added</h4>
            }
            {sQuestion.length>0 ?
                <button className="btn btn-primary btn-sm" onClick={() => history.push("/Survey-App")}>Confirm</button>
            : null}
        </div>
    );
}

export default Publish;
