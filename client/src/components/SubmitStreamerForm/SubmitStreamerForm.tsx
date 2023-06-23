import React from 'react';
import css from './SubmitStreamerForm.module.css';

function SubmitStreamerForm() {
  return (
    <form className={css['form']}>
      <h3>Add Streamer</h3>
      
      <label className={`${css['label']} ${css['name']}`}>
        Name
        <input placeholder="Streamer's name..." className={css['input']}/>
      </label>

      <label className={`${css['label']} ${css['desc']}`}>
        Description
        <textarea style={{ resize: 'none' }} className={css['input']} placeholder="Say something interesting about your favorite streamer..."></textarea>
      </label>

      <label className={`${css['label']} ${css['paltfrom']}`}>
        Platform
        <select className={css['input']}>
          <option value="twitch">Twitch</option>
          <option value="youtube">YouTube</option>
          <option value="tiktok">TikTok</option>
          <option value="kick">Kick</option>
          <option value="rumble">Rumble</option>
        </select>
      </label>

      <button className={css['button']}>submit</button>
    </form>
  )
}

export default SubmitStreamerForm;