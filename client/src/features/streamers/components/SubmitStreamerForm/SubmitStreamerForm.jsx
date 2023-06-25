import { useState } from 'react';
import css from './SubmitStreamerForm.module.css';
import { Text, Button } from 'features/ui';
import { Label, Input, TextArea, Select, Option } from 'features/forms';

function SubmitStreamerForm() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [platform, setPlatform] = useState('');
  
  return (
    <form className={css['form']}>
      <Text element="h2" variant="h" fontSize={1}>Add Streamer</Text>
      
      <Label label="Name">
        <Input 
          placeholder="Streamer's name..."
          value={name}
          setValue={setName}
        />
      </Label>

      <Label label="Description">
        <TextArea
          placeholder="Say something interesting about your favorite streamer..."
          value={desc}
          setValue={setDesc}
        />
      </Label>
      
      <Label label="Platform">
        <Select
          value={platform}
          setValue={setPlatform}
        >
          <Option value="">--- choose platform ---</Option>
          <Option value="twitch">Twitch</Option>
          <Option value="youtube">YouTube</Option>
          <Option value="tiktok">TikTok</Option>
          <Option value="kick">Kick</Option>
          <Option value="rumble">Rumble</Option>
        </Select>
      </Label>

      <Button>Submit</Button>
    </form>
  )
}

export { SubmitStreamerForm };