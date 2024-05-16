"use server"

const url = process.env.HYGRAPH_URL as string
const token = process.env.HYGRAPH_TOKEN as string

export async function getProjects() {
  const GET_PROJECTS_QUERY = {
    query: `
      query {
        portfolios {
          id
          nomeDoProjeto
        }
      }
    `,
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(GET_PROJECTS_QUERY),
    })

    const { data } = await response.json()

    return {
      projects: data.portfolios,
    }
  } catch (error) {
    console.log(error)

    return {
      projects: [],
    }
  }
}
