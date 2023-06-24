import css from './SubmitStreamerForm.module.css';
import Text from '../Text/Text';
import Button from '../Button/Button';

function SubmitStreamerForm() {
  return (
    <form className={css['form']}>
      <Text element="h2" variant="h" fontSize={1}>Add Streamer</Text>
      
      <label className="label">
        Name
        <input 
          className="input"
          placeholder="Streamer's name..."
        />
      </label>

      <label className="label">
        Description
        <textarea 
          className="input"
          style={{ resize: 'none' }}
          placeholder="Say something interesting about your favorite streamer..."
        />
      </label>

      <label className="label">
        Platform
        <select className="input">
          <option value="platform">--- choose platform ---</option>
          <option value="twitch">Twitch</option>
          <option value="youtube">YouTube</option>
          <option value="tiktok">TikTok</option>
          <option value="kick">Kick</option>
          <option value="rumble">Rumble</option>
        </select>
      </label>

      <Button>Submit</Button>
    </form>
  )
}

export default SubmitStreamerForm;