import {useState, useEffect} from 'react';
import Button from 'components/Button/Button';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Searchbar from 'components/Searchbar/Searchbar';
import Oops from 'components/Oops/Oops';
import css from 'components/App.module.css';
import onFetchHendler from 'servises/onFetchHendler';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const App = () => {
  const [imgSearchName, setImgSearchName] = useState ('');
  const [imgsToDisplay, setImgsToDisplay] = useState ([]);
  const [page, setPage] = useState (1);
  const [status, setStatus] = useState (Status.IDLE);
  const [total, setTotal] = useState (0);


const totalPage = imgsToDisplay.length / (page * total);

  const onLoadMoreHendler = () => {
    setPage(prevPage => prevPage + 1);
  };

  const onSubmitHendler = SearchName => {
    setImgSearchName(SearchName);
    setPage(1);
    setImgsToDisplay([]);
    setStatus(Status.PENDING);
  };

  useEffect(() => {
    if (!imgSearchName) {
      setStatus(Status.IDLE);
      return;
    }
    setStatus(Status.PENDING);
    onFetchHendler(imgSearchName, page)
      .then(data => {
        if (data.total === 0) {
          setStatus(Status.REJECTED);
          return;
        }
        setImgsToDisplay(prevdata => [...prevdata, ...data.hits]);
        setTotal(data.totalHits);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        console.log(error);
      });
  }, [imgSearchName, page]);

  return (
    <div className={css.AppWrap}>
      <Searchbar onSubmitHendler={onSubmitHendler}></Searchbar>

      {imgsToDisplay.length > 0 && (
        <ImageGallery imgsToDisplay={imgsToDisplay}></ImageGallery>
      )}
      {status === 'pending' && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Loader></Loader>
        </div>
      )}
      {status === 'rejected' && <Oops imgSearchName={imgSearchName}></Oops>}
      {totalPage < 1 && status === 'resolved' && (
        <Button onLoadMoreHendler={onLoadMoreHendler}></Button>
      )}
    </div>
  );
};

export default App;

// export class App extends React.Component {
//   state = {
//     imgSearchName: '',
//     imgsToDisplay: [],
//     page: 1,
//     img: null,
//     status: Status.IDLE,
//     total: 0,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (
//       prevState.imgSearchName !== this.state.imgSearchName ||
//       prevState.page !== this.state.page
//     ) {
//       if (this.state.imgSearchName.trim() === '') {
//         return this.setState({ status: Status.REJECTED });
//       }
//       this.setState({ status: Status.PENDING });
//       onFetchHendler(this.state.imgSearchName, this.state.page)
//         .then(data => {
//           if (data.total === 0) {
//             this.setState({ status: Status.REJECTED });
//             return;
//           }
//           this.setState(prevstate => ({
//             imgsToDisplay: [...prevstate.imgsToDisplay, ...data.hits],
//             total: data.totalHits,
//             status: Status.RESOLVED,
//           }));
//         })
//         .catch(error => {
//           console.log(error);
//         });
//     }
//   }

//   onSubmitHendler = imgSearchName => {
//     this.setState({
//       imgSearchName,
//       page: 1,
//       imgsToDisplay: [],
//     });
//   };

//   onLoadMoreHendler = () => {
//     this.setState(prevstate => ({ page: prevstate.page + 1 }));
//   };

//   render() {
//     // const totalPage =
//     //   this.state.imgsToDisplay.length / (this.state.page * this.state.total);
//     return (
//       <div className={css.AppWrap}>
//         <Searchbar onSubmitHendler={this.onSubmitHendler}></Searchbar>

//         <ImageGallery imgsToDisplay={this.state.imgsToDisplay}></ImageGallery>
//         {this.state.status === 'pending' && (
//           <div
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               flexDirection: 'column',
//             }}
//           >
//             <Loader></Loader>
//           </div>
//         )}
//         {this.state.status === 'rejected' && (
//           <Oops imgSearchName={this.state.imgSearchName}></Oops>
//         )}

//         {this.state.imgsToDisplay.length >= 1  && this.state.imgsToDisplay.length < this.state.total &&
//            <Button onLoadMoreHendler={this.onLoadMoreHendler}></Button>
//         }
//         {/* {this.onFetchHendler.totalHits < 1  && this.state.status === 'resolved' && (
//           <Button onLoadMoreHendler={this.onLoadMoreHendler}></Button>
//         )} */}
//       </div>
//     );
//   }
// }
// console.log()
