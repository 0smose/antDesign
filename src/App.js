import React, {useState} from "react";
import "antd/dist/antd.css";
import { Steps, message, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined, UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined  } from '@ant-design/icons';
import ContactForm from './components/ContactForm'
import DevForm from './components/DevForm'


import "antd/dist/antd.css";


const App = () => {

  const [current, setCurrent] = useState(0);
  const { Step } = Steps;

  const steps = [
    {
      title: 'First',
      content: 'First-content',
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
  ]
  

  const next = () => {
    setCurrent(current + 1);
  };

  return(
    <div>
      <p>Hey, this is a cool button, done with AntDesign !</p>
      <Steps current={current}>
      {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
  </Steps>,
      <div>
        {current === 0 && <ContactForm next={next} />}
        {current === 1 && <DevForm next={next} />}

        
      </div>
      ,
    </div>

  )
  
};

export default App;