import React from 'react';
import './FormDesign.css';
import { Button } from '../../Button/Button';
import Form from '../Form';
import { useNavigate } from 'react-router-dom';

const ResumeTemplate = (props) => {

  const navigate = useNavigate();

  console.log(props);

  const handleClick1 = e => {
    navigate('/resume/templates2', { state: props.values});
    props.formSubmitted();
  };

  const handleClick2 = e => {
    navigate('/resume/templates1', { state: props.values });
    props.formSubmitted();
  };

  return (
    <Form>
      <div className='title'>Type of Resume</div>
      <div className='buttons'>
        <span className='btn-left' onClick={handleClick1}>
          <Button content="Single Column Resume" />
        </span>
        <span className='btn-right' onClick={handleClick2}>
          <Button content="Dual Column Resume" />
        </span>
      </div>
    </Form>

  )
}

export default ResumeTemplate
