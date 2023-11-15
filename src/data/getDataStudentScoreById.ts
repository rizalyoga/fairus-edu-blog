const url = process.env.NEXT_PUBLIC_APP_LINK_API;

export const getDataScoreStudent = async (id: number) => {
  const response = await fetch(`${url}?action=getDataStudentById&id=${id}`);
  const data = await response.json();

  if (response.ok) {
    const newData = data;

    return newData;
  } else {
    throw new Error(
      JSON.stringify({ code: response.status, message: response.statusText })
    );
  }
};
