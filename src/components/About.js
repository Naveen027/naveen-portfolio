import React from 'react';
import './About.css';
import { Chart as chartjs } from 'chart.js/auto';
import {  Bar } from 'react-chartjs-2';
import mydata from '/react/myproj/src/mydata.json';

chartjs.defaults.color = 'white';
chartjs.defaults.label = 'white';




function About() {

  return (
    <div>
      <div className='title' id='title'>
        <h3>Skills</h3>
      </div>
      <Bar
        data={{
          labels: mydata.map((data) => data.label),
          datasets: [
            {
              label: "percentage",
              data: mydata.map((data) => data.value),
              borderWidth: 1,
              barThickness: 120,
              backgroundColor: [
                'rgb(70 156 231)',
                'rgb(70 156 231)',
                'rgb(70 156 231)',
                'rgb(70 156 231)',
                'rgb(70 156 231)'
              ],
              borderColor: [
                'white',
                'white',
                'white',
                'white',
                'white'
              ],
            },
          ],

        }}
        style={{ margin: "20px auto 73px auto", width: "900px", height: "500px" }} />

      <div class="col-lg-12">
        <div class="what">
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          <h4>What I can Do</h4>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div class="col-lg-4">
            <div class="box1">
              <i class="fa fa-laptop"></i>
              <div class="text">
                <h5>Responsive Design</h5>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="box1">
              <i class="fa fa-link"></i>
              <div class="text">
                <h5>API Integration</h5>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="box1">
              <i class="fa fa-paper-plane"></i>
              <div class="text">
                <h5>UI Design</h5>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>



  );
}

export default About;