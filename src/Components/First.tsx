import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';

type Props = {
  handle: any;
  handlejson: any;
  loading: boolean;
  list: any;
  count: number;
  setcount: any;
  scrollToTop: any;
  navigate: any;
};
type List = {
  author: string;
  created_at: string;
  story_url: string;
  story_title: string;
  objectID: string;
};
const First = (props: Props) => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Datatable</h1>
      {props.loading ? (
        <CircularProgress style={{ marginTop: '20%', marginLeft: '50%' }} />
      ) : (
        <div className='App'>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Created_at</th>
                <th>Author</th>
                <th>Url</th>
              </tr>
            </thead>
            {props.list.map((res: List) => {
              return (
                <tbody key={res.objectID}>
                  <tr
                    onClick={() => {
                      props.handlejson(res.author);
                      props.navigate('/Scrren');
                    }}
                  >
                    <td>{res.story_title}</td>
                    <td>{res.created_at}</td>
                    <td>{res.author}</td>
                    <td>{res.story_url}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
          <div className='center'>
            <Button
              variant='contained'
              onClick={() => {
                if (props.count === 1) {
                  console.log(props.count);
                  return;
                }
                props.setcount(props.count - 1);
                props.scrollToTop();
              }}
            >
              Prev
            </Button>
            <Pagination
              count={50}
              style={{ display: 'flex', justifyContent: 'center' }}
              onClick={props.handle}
            />
            <Button
              variant='contained'
              onClick={() => {
                props.setcount(props.count + 1);
                props.scrollToTop();
              }}
              style={{ marginLeft: '10px' }}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default First;
