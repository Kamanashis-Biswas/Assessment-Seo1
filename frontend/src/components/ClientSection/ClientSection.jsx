import { useEffect, useState } from "react";
import avatar from "../../assets/avatar.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";

const ClientSection = ({ id }) => {
  const [files, setFiles] = useState([]);
  const [showFiles, setShowFiles] = useState(false);
  const [index, setIndex] = useState(null);
  useEffect(() => {
    if (id) {
      setIndex(index);
      fetch("https://seo1-assessment.onrender.com/files/" + id)
        .then((resp) => resp.json())
        .then((data) => {
          setFiles(data.files);
        });
    }
  }, []);

  const fileInputChanged = (event) => {
    const formData = new FormData();
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i], files[i].name);
    }
    if (id) formData.append("id", id);

    fetch("https://seo1-assessment.onrender.com/upload", {
      method: "POST",
      body: formData,
    })
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="bg-white rounded p-2 mb-5 ">
      <div className="flex justify-between mt-2">
        <div className="flex gap-2 items-center">
          <img className="w-10" src={avatar} alt="Profile" />
          <h2>Client Name {id}</h2>
        </div>
        <div className="flex gap-2 items-center">
          <img className="w-10" src={avatar2} alt="Profile" />
          <h2>Kamanashis</h2>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-1">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
          </svg>

          <p>Lorem ipsum dolor sit amet cons...</p>
        </div>
        <div className="flex bg-slate-200 p-1 rounded-md">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
            />
          </svg>
          <p>1/2</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <img className="w-10" src={avatar3} alt="Profile" />
        <img className="w-10" src={avatar4} alt="Profile" />
        <p className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200">
          12+
        </p>
        <div className="flex gap-1">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>

          <p>15</p>
        </div>
        <div className="flex gap-1">
          <label htmlFor={"file" + id}>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 aticon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
              />
            </svg>
          </label>
          <input
            id={"file" + id}
            type="file"
            style={{ display: "none" }}
            multiple
            onChange={fileInputChanged}
          />
          <p
            onClick={() => setShowFiles(!showFiles)}
            style={{ cursor: "pointer" }}
          >
            {files.length}
          </p>
        </div>
        <div className="flex gap-1">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
          </svg>
          <p>30-12-2022</p>
        </div>
      </div>
      {files.length && showFiles
        ? files.map((f) => (
            <div key={f}>
              <li>{f}</li>
            </div>
          ))
        : ""}
    </div>
  );
};

export default ClientSection;
