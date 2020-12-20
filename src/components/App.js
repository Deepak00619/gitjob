import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";
import Job from "./Job";
import JobsPagination from "./JobsPagination";
import gitlogo from "./gitlogo2.png";
import SearchForm from "./SearchForm";
import {
  HeroContainer,
  HeroContainer1,
  HeroContainer2,
  Loading,
} from "./style";
import style from "styled-components";
import Back from "./loading11.jpg";
import styled from "styled-components";

const Pa = style.div`
background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${Back});
`;

const center = style.div`
text-align: center
`;

export default function App() {
  const [params, setParams] = useState({
    description: "",
    location: "",
    full_time: false,
  });
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <Loading>
      {loading && <h1 style={{ color: "yellow" }}>Loading...</h1>}

      <Container className="my-4">
        <HeroContainer>
          <img
            className="d-md-block"
            height="75"
            width="170"
            alt="Github Jobs"
            src={gitlogo}
          />

          <SearchForm params={params} onParamChange={handleParamChange} />
          <center>
            {error && <h1 style={{ color: "yellow" }}>Try Refreshing</h1>}
          </center>
          <JobsPagination
            page={page}
            setPage={setPage}
            hasNextPage={hasNextPage}
          />
        </HeroContainer>
        <Pa>
          {jobs.map((job) => {
            return <Job key={job.id} job={job} />;
          })}
        </Pa>

        <pag>
          <JobsPagination
            page={page}
            setPage={setPage}
            hasNextPage={hasNextPage}
          />
        </pag>
      </Container>
    </Loading>
  );
}

//<JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
//{loading && <h1 style={{color:"yellow"}}>loading...</h1>}
