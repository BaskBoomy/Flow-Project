import axios from "axios";
import { useEffect, useState } from "react";
import { ReactComponent as CheckFilled } from "../../assets/check-fill.svg";
import { ReactComponent as Check } from "../../assets/check.svg";

const FileExtensionList = (props) => {
  const [extensionList, setExtensionList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/getExtensionList").then(({ data }) => {
      setExtensionList(data);
    });
  });

  const updateExtension = (extension) => {
    //db에 차단 확장자 수정
    axios
      .post(`http://localhost:5000/updateExtension`, {
        id: extension.id,
        name: extension.name,
        isBlocked: !extension.isBlocked,
      })
      .then(({ data }) => {
        console.log(data);
      });
  };
  return (
    <div className="extension_list_box">
      {extensionList.map((extension) => {
        return (
          <div
            key={extension.id}
            className="extension_box_vertical"
            onClick={() => updateExtension(extension)}
          >
            {extension.name}
            <button id={extension.id} className="extension_close_btn">
              {extension.isBlocked ? <CheckFilled /> : <Check />}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FileExtensionList;
