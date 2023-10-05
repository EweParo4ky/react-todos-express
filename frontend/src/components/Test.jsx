import React, { useEffect, useState } from 'react';

const Test = () => {
  const [state, setState] = useState(null);

  const callBackendAPI = async () => {
    const response = await fetch('/api/server');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  // получение GET маршрута с сервера Express, который соответствует GET из server.js
  useEffect(() => {
    callBackendAPI()
      .then((res) => setState(res.express))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {/* вывод данных, полученных с сервера Express */}
      <div>{state}</div>
    </div>
  );
};

export default Test;
