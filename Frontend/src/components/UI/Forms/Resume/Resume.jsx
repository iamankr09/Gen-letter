import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PersonalDetails from './PersonalDetails';
import Links from './Links';
import EducationDetails from './EducationDetails';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Achievements from './Achievements';
import Skills from './Skills';
import POR from './POR';
import FinalPage from './FinalPage';
import axios from 'axios';
import ResumeTemplate from './ResumeTemplate';

function Resume() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [index, setIndex] = useState(1);

  const [refs, setRefs] = useState({
    fnameRef: '',
    lnameRef: '',
    phoneRef: '',
    emailRef: '',
    rollnoRef: '',
    linksRef: [{
      name: '',
      link: ''
    }],
    educationRef: [{
      degree: '',
      course: '',
      university: '',
      year: '',
      grade: ''
    }],
    workexRef: [{
      title: '',
      organization: '',
      duration: '',
      contributions: '',
      links: [{
        name: '',
        link: '',
      }]
    }],
    projectsRef: [{
      name: '',
      description: '',
      completed: '',
      links: [{
        name: '',
        link: ''
      }]
    }],
    achievementsRef: [{
      achievement: '',
      description: '',
      links: [{
        name: '',
        link: ''
      }]
    }],
    skillsRef: {
      languages: [''],
      frameworksLibrariesAndDatabases: [''],
      subjects: ['']
    },
    porRef: [{
      position: '',
      organization: '',
      duration: '',
      work: '',
      links: [{
        name: '',
        link: ''
      }]
    }]
  })

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5011/edit/resume/${id}`)
        .then((response) => {
          console.log(response.data);
          setRefs(response.data);
        })
        .catch(() => {
          alert('error');
        })
    }
  }, [id])

  const handleChange = input => e => {
    setRefs({ ...refs, [input]: e.target.value });
  }

  const handleArrayChange = input => e => {
    console.log(input + ' ' + e.target.value);
    const copy = { ...refs };
    const split = input.split(' ');
    const field = split[0], subfield = split[1], index = split[2];
    copy[field][index][subfield] = e.target.value;
    setRefs(copy);
  }

  const handleLinkChange = input => e => {
    const split = input.split(' ');
    const refName = split[0], name = split[1], type = split[2], index = split[3], subIndex = split[4];
    const copy = { ...refs };
    copy[refName][index][name][subIndex][type] = e.target.value;
    setRefs(copy);
  }

  const handleSkillChange = input => e => {
    const copy = { ...refs };
    console.log(input);
    const split = input.split(' ');
    const field = split[0], subfield = split[1], index = split[2];
    copy[field][subfield][index] = e.target.value;
    setRefs(copy);
  }

  const fieldAddHandler = (name) => {
    const copy = { ...refs };
    console.log(copy[name]);
    const obj = {};
    copy[name].keys(key => {
      if (key === 'links') {
        obj[key] = {
          name: '',
          link: ''
        }
      } else {
        obj[key] = '';
      }
    })
    console.log(obj);
    copy[name].push(obj);
    setRefs(copy);
  }

  const fieldArrayAddHandler = (name) => {
    let obj = {};
    if (name === 'projectsRef') {
      obj = {
        name: '',
        description: '',
        completed: '',
        links: [{
          name: '',
          link: ''
        }]
      }
    } else if (name === 'workexRef') {
      obj = {
        title: '',
        organization: '',
        duration: '',
        contributions: '',
        links: [{
          name: '',
          link: ''
        }]
      }
    } else if (name === 'achievementsRef') {
      obj = {
        achievement: '',
        description: '',
        links: [{
          name: '',
          link: ''
        }]
      }
    } else {
      obj = {
        position: '',
        organization: '',
        duration: '',
        work: '',
        links: [{
          name: '',
          link: ''
        }]
      }
    }

    const copy = { ...refs };
    copy[name].push(obj);
    setRefs(copy);
  }

  const fieldRemoveHandler = (name) => {
    const copy = { ...refs };
    copy[name].pop();
    setRefs(copy);
  }

  const skillFieldAddHandler = (input) => {
    const split = input.split(' '), name = split[0], subName = split[1];
    const copy = { ...refs };
    copy[name][subName].push('');
    setRefs(copy);
  }

  const skillFieldRemoveHandler = (input) => {
    const split = input.split(' '), name = split[0], subName = split[1];
    const copy = { ...refs };
    copy[name][subName].pop();
    setRefs(copy);
  }

  const linkIncreaseHandler = (link) => {
    console.log(link);
    const split = link.split(' '), name = split[0], index = split[1];
    const copy = { ...refs };
    const obj = {
      name: '',
      link: ''
    }

    copy[name][index].links.push(obj);
    setRefs(copy);
  }

  const linkDecreaseHandler = (link) => {
    const split = link.split(' '), name = split[0], index = split[1];
    const copy = {...refs};
    copy[name][index].links.pop();
    setRefs(copy);
  }

  const prevStep = () => {
    setIndex(index - 1);
  }

  const nextStep = () => {
    setIndex(index + 1);
  }

  const formatDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    let hrs = today.getHours();
    let mins = today.getMinutes();
    var ampm = hrs >= 12 ? 'pm' : 'am';
    hrs = hrs % 12;
    hrs = hrs ? hrs : 12;
    mins = mins < 10 ? '0' + mins : mins;
    var strTime = hrs + ':' + mins + ' ' + ampm;
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = strTime + ', ' + dd + '/' + mm + '/' + yyyy;
    return formattedToday;
  }

  const handleSubmit = async (event) => {
    const obj = {
      fname: refs.fnameRef,
      lname: refs.lnameRef,
      rollNo: refs.rollnoRef,
      links: refs.linksRef,
      email: refs.emailRef,
      phoneNo: refs.phoneRef,
      education: refs.educationRef,
      workex: refs.workexRef,
      projects: refs.projectsRef,
      achievements: refs.achievementsRef,
      skills: refs.skillsRef,
      por: refs.porRef,
      date: formatDate()
    };
    setRefs({
      fnameRef: '',
      lnameRef: '',
      phoneRef: '',
      emailRef: '',
      rollnoRef: '',
      educationRef: [{
        degree: '',
        course: '',
        university: '',
        year: '',
        grade: ''
      }],
      workexRef: [{
        title: '',
        organisation: '',
        duration: '',
        contributions: ''
      }],
      projectsRef: [{
        name: '',
        description: '',
        completed: ''
      }],
      achievementsRef: [{
        achievement: '',
        description: ''
      }],
      skillsRef: {
        languages: [{
          skill: ''
        }],
        frameworksLibrariesAndDatabases: [{
          skill: ''
        }],
        subjects: [{
          skill: ''
        }]
      },
      porRef: [{
        position: '',
        organisation: '',
        duration: '',
        work: ''
      }]
    });

    await fetch('http://localhost:5011/resume', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id: id, ...obj})
    })
    .catch(error => {
      console.log(error);
      return;
    })
  }

  let content = '';

  switch(index) {
    case 1: content = (
      <PersonalDetails onChange={handleChange} title='Personal Details' nextStep={nextStep} prevStep={prevStep} values={refs} />
    );
      break;
    case 2: content = (
      <Links onChange={handleArrayChange} title='Profile Links' nextStep={nextStep} prevStep={prevStep} values={refs} increase={fieldAddHandler} decrease={fieldRemoveHandler}></Links>
    );
      break;
    case 3: content = (
      <EducationDetails onChange={handleArrayChange} title='Educational Details' nextStep={nextStep} prevStep={prevStep} values={refs} increase={fieldAddHandler} decrease={fieldRemoveHandler}/>
    );
      break;
    case 4: content = (
      <WorkExperience onChange={handleArrayChange} title='Work Experience' nextStep={nextStep} prevStep={prevStep} values={refs} increase={fieldArrayAddHandler} decrease={fieldRemoveHandler} increaseLink={linkIncreaseHandler} decreaseLink={linkDecreaseHandler} onChangeLink={handleLinkChange}/>
    );
      break;
    case 5: content = (
      <Projects onChange={handleArrayChange} title='Projects' nextStep={nextStep} prevStep={prevStep} values={refs} increase={fieldArrayAddHandler} decrease={fieldRemoveHandler} increaseLink={linkIncreaseHandler} decreaseLink={linkDecreaseHandler} onChangeLink={handleLinkChange}/>
    );
      break;
    case 6: content = (
      <Achievements onChange={handleArrayChange} title='Academic Achievements and Awards' nextStep={nextStep} prevStep={prevStep} values={refs} increase={fieldArrayAddHandler} decrease={fieldRemoveHandler} increaseLink={linkIncreaseHandler} decreaseLink={linkDecreaseHandler} onChangeLink={handleLinkChange}/>
    );
      break;
    case 7: content = (
      <Skills onChange={handleSkillChange} title='Technical Skills' nextStep={nextStep} prevStep={prevStep} values={refs} increase={skillFieldAddHandler} decrease={skillFieldRemoveHandler}/>
    );
      break;
    case 8: content = (
      <POR onChange={handleArrayChange} title='Position of Responsibilities' nextStep={nextStep} prevStep={prevStep} values={refs} increase={fieldArrayAddHandler} decrease={fieldRemoveHandler} increaseLink={linkIncreaseHandler} decreaseLink={linkDecreaseHandler} onChangeLink={handleLinkChange}/>
    );
      break;
    case 9: content = (
      <ResumeTemplate nextStep={nextStep} prevStep={prevStep} values={refs} formSubmitted={handleSubmit} />
    )
      break;
    default: content = (
      <FinalPage title='Thank You!' />
    );
      break;
  }

  return (
    <>{content}</>
  )
}

export default Resume;
