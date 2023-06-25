import { useParams } from "react-router-dom";
import { 
  FaArrowCircleLeft, 
  FaArrowCircleRight
} from 'react-icons/fa';
import { Wrapper } from "../wrapper";
import {
  Loading,
  Title,
  BackButton,
  Container,
  Header,
  Owner,
  Text,
  Content,
  IssuesList,
  IssuesBody,
  IssueDetail,
  SubTitle,
  User,
  Labels,
  IssuesFooter,
  Small,
  Filters
} from './styles'
import { useEffect, useState } from "react";
import api from "../../services/api";

function Repos() {
  const { name } = useParams()
  const repoName = name

  const [repo, setRepo] = useState({})
  const [issues, setIssues] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [filters, setFilters] = useState([
    {state: 'all', label: 'Todas', active: true},
    {state: 'open', label: 'Abertas', active: false},
    {state: 'closed', label: 'Fechadas', active: false}
  ])
  const [filterIndex, setFilterIndex] = useState(0)

  useEffect(() => {
    async function loadRepo() {
      const [repoData, issuesData] = await Promise.all([
        api.get(`/repos/${repoName}`),
        api.get(`/repos/${repoName}/issues`, {
          params: {
            state: filters.find(f => f.active).state,
            per_page: 5
          }
        })
      ])

      setRepo(repoData.data)
      setIssues(issuesData.data)
      setLoading(false)
    }

    loadRepo()
  }, [filters, repoName])

  useEffect(() => {
    async function LoadIssue() {
      const response = await api.get(`/repos/${repoName}/issues`, {
        params: {
          state: filters[filterIndex].state,
          page,
          per_page: 5
        },
      })
      setIssues(response.data)
    }

    LoadIssue()

  }, [filters, filterIndex, repoName, page])

  function handlePage(action) {
    setPage(action === 'back'  ? page - 1 : page + 1)
  }

  if (loading) {
    return (
      <Loading>
        <Title>Carregando...</Title>
      </Loading>
    )
  }

  function handleFilter(i) {
    setFilterIndex(i)
  }

  return (
    <Wrapper>
      <Container>
        <Content>
          <Header>
            <BackButton to={'..'}>
              <FaArrowCircleLeft size={28} />
            </BackButton>
          <Filters active={filterIndex}>
              {
                filters.map((filter, i) => (
                  <button 
                    type="button"
                    key={ i }
                    onClick={() => handleFilter(i)}
                  >
                    {filter.label}
                  </button>
                ))
              }
            </Filters>
          </Header>

          <Owner>
            <img
              src={repo.owner.avatar_url}
              alt={repoName}
            />
            <Title>{repo.name} - issues</Title>
            <Text>
              {repo.description}
            </Text>
          </Owner>

          <IssuesBody>
            {
              issues.length === 0 ?
                <SubTitle style={{ color: '#06d6a0' }}>
                  Nenhuma Issue encontrada nesse Repositório!
                </SubTitle> :
                <IssuesList>
                  {
                    issues.map(issue => (
                      <li key={issue.id}>
                        <User>
                          <img
                            src={issue.user.avatar_url}
                            alt={issue.user.login}
                          />
                          <Text><strong>{issue.user.login}</strong></Text>
                        </User>

                        <IssueDetail>
                          <Small>
                            <span>
                              criato em: {issue.created_at}
                            </span>
                          </Small>

                          <a
                            href={issue.html_url}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {issue.title}
                          </a>

                          {issue.labels.length > 0
                            ? <Text>labels:
                              {issue.labels.map(label => (
                                <Labels key={label.id} className="labels"> {label.name} </Labels>
                              ))}
                            </Text>
                            : null
                          }

                        </IssueDetail>
                      </li>
                    ))
                  }
                </IssuesList>
            }
          </IssuesBody>

          <IssuesFooter>
            <button
              type="button"
              onClick={() => handlePage('back')}
              disabled={page < 2}
            >
              <FaArrowCircleLeft />
            </button>

            <Text>
              Page: {page}
            </Text>

            <button
              type="button"
              onClick={() => handlePage('next')}
            >
              <FaArrowCircleRight />
            </button>
          </IssuesFooter>
        </Content>
      </Container>
    </Wrapper>
  );
}

export default Repos
