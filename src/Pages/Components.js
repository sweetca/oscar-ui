import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ComponentList from '../Components/ComponentList';
import Pagination from '../Components/Pagination';
import Loading from '../Components/Loading';
import styles from '../Styles/ListViews/main.module.css';

const Components = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get('http://cs360.codescoop.com:8081/component');
      setData(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

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
