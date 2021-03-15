import React,{useState} from 'react';
import TypeSelector from '../TypeSelector';
import Question from '../Question';
import Option from '../Option';
import { useHistory } from 'react-router';

function CreateSurvey({sQuestion, setSQuestion}) {
    const getRandom = () => Math.floor(Math.random()*1000 +1);
    const defaultOption = [{id: getRandom(), value: " "},{id: getRandom(), value: " "}];
    const[QType, setQType] = useState(0);
    const[option, setOption] = useState(defaultOption);
    const[QText, setQText] = useState(" ");
    const history = useHistory();
    let flag = true;

    const addOption = () => {
        let newOption = {
            id: getRandom(),
            value: ""
        };
        let updateOption = [...option,newOption];
        setOption(updateOption);
    };

    const removeOption = () => {
        if(option.length>2)
        {
            let updateOption = [...option];
            updateOption.pop();
            setOption(updateOption);
        }
    };

    const updateOptionInfo = (newId, newValue) => {
        let updateInfo = [...option];
        let index = updateInfo.findIndex(temp => temp.id===newId);
        updateInfo[index].value = newValue;
        setOption(updateInfo);
    };

    const updateSQuestion = () => {
        for(let i=0;i<option.length;i++)
        {
            if(option[i].value===" ")
                flag = false;
        }
        if(flag)
        {
            let updateObj = {
                type: QType,
                question: QText,
                options: option
            };
            let updateQuestion = [...sQuestion,updateObj];
            setSQuestion(updateQuestion);
            setOption(defaultOption);
            setQType(0);
        }
        else
        {
            alert("Input fields are empty!");
        }
    };

    const handlePublish = () => {
        for(let i=0;i<option.length;i++)
        {
            if(option[i].value===" ")
                flag = false;
        }
        if(flag)
        {
            history.push("/publish");
            updateSQuestion();
        }
        else
        {
            alert("Input fields are empty!");
        }
    }

    return (
        <>
            <TypeSelector QType={QType} setQType={setQType}/>
            {QType!==0 ?
                <>
                    <Question setQText={setQText}/>
                    {option.map((item,itemIndex) => {
                        return  <Option 
                        key={item.id} 
                        addOption={addOption} 
                        removeOption={removeOption} 
                        updateOptionInfo={updateOptionInfo}
                        newId={option[itemIndex].id}
                        />;
                    })}
                    <button className="btn btn-primary m-1" onClick={updateSQuestion}>Add Question</button>
                    <button className="btn btn-primary m-1"onClick={handlePublish}>Publish</button>
                </>
            : null}
        </>
    );
}

export default CreateSurvey;
