import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ComponentList from '../Components/ComponentList';
import Pagination from '../Components/Pagination';
import Loading from '../Components/Loading';
import styles from '../Styles/ListViews/main.module.css';

const Components = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(1);
  const url = props.information.urlPath;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(url);
      setData(res.data);
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  return (
    <div className={styles.mainWrapper}>
      {!isLoading
        ? (
          <ComponentList
            data={currentData}
            title={props.information.title}
          />
        )
        : <Loading /> }
      <Pagination
        dataPerPage={dataPerPage}
        totalData={data.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Components;
