
import React, { Component } from 'react';
import styles from './home.module.scss';
import WorkLists from '../../components/WorkLists';
import worksData from '../works.json';

export default () =>{
    return <div className={ styles.wrap }>
        
        {/* 个人简介 */}
        <section className={ styles.brief }>
            <h2>緯謙科技實習成果</h2>
            <ul>
                <li>指導教授: 陸承志</li>
                <li>實習生: 1071610吳品燁s</li>
            </ul>
            <p>I design applications, interactive systems and websites. I love using technology in creative contexts.</p>
            <p>I am a freelancer based in Utrecht, the Netherlands.</p>
            <p>Contact me at thijs@vauxlab.com</p>
        </section>  

        {/* 作品列表 */}
        <section className={ styles.work }>
            <div className={ styles.title }>
                <h3>A selection of work</h3>
                <p>You can find more in the work overview.</p>
            </div>
            <WorkLists dataSource = { worksData.data } />
        </section>

    </div>
}
