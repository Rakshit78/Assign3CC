import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

type Props = {
  pass: any;
};

const Screen = (props: Props) => {
  const navigate = useNavigate();
  const jdata = {
    author: props.pass[0].author,
    story_title: props.pass[0].story_title,
    story_url: props.pass[0].story_url,
    created_at: props.pass[0].created_at,
  };
  return (
    <>
      <Button
        variant='contained'
        onClick={() => {
          navigate('/');
        }}
        style={{ margin: '10px' }}
      >
        Back
      </Button>
      <br />
      {JSON.stringify(jdata)}
    </>
  );
};

export default Screen;
