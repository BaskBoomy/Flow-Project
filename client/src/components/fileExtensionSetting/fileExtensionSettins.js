import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Modal } from "../../commons/components/modals/modal";
import FileExtensionList from "../fileExtensionList/fileExtensionList";

export const FileExtensionSetting = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [extensionList, setExtensionList] = useState([]);
  const [defalutExtensionList, setDefaultExtensionList] = useState([]);
  const [customExtensionList, setCustomExtensionList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/getExtensionList").then(({ data }) => {
      setExtensionList(data);
      setDefaultExtensionList(data.slice(0, 7));
      setCustomExtensionList(data.slice(7));
    });
  });
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const addExtension = () => {
    // const list = [...customExtensionList];
    // list.push({ id: 23, name: inputRef.current.value });
    // setCustomExtensionList(list);
    axios
      .post(`http://localhost:5000/addExtension`, {
        name: inputRef.current.value,
        isBlocked: true,
      })
      .then(({ data }) => {
        console.log(data);
      });
  };

  const deleteExtension = (id) => {
    const list = customExtensionList.filter((extension) => extension.id !== id);
    setCustomExtensionList(list);
  };
  const updateExtension = async (extension) => {
    //db에 차단 확장자 수정
    await axios
      .post(`http://localhost:5000/updateExtension`, {
        id: extension.id,
        name: extension.name,
        isBlocked: !extension.isBlocked,
      })
      .then(({ data }) => {
        console.log(data);
      });
  };
  const inputRef = useRef("");
  return (
    <div className="content">
      <p>
        파일 확장자에 따라 특정 형식의 파일을 첨부하거나 전송하지 못하도록 제한
      </p>
      <div className="L_2R_8">
        <div className="left">고정 확장자</div>
        <div className="right flex_space_between">
          {defalutExtensionList.map((extension) => {
            return (
              <>
                <input
                  key={extension.id}
                  type="checkbox"
                  className="chk"
                  checked={extension.isBlocked}
                  onChange={() => updateExtension(extension)}
                />
                {extension.name}
              </>
            );
          })}
        </div>
      </div>
      <div className="L_2R_8">
        <div className="left">커스텀 확장자</div>
        <div className="right">
          <div className="flex_space_between">
            <input
              id="input_extension"
              type="text"
              placeholder="확장자 입력"
              className="input_box"
              ref={inputRef}
            />
            <button onClick={addExtension} className="btn_purple width21">
              추가
            </button>
            <button onClick={openModal} className="btn_purple width30">
              확장자 리스트
            </button>
            <Modal
              open={modalOpen}
              close={closeModal}
              header="파일 확장자 리스트"
            >
              <FileExtensionList />
            </Modal>
          </div>
          <div className="box_list">
            {customExtensionList &&
              customExtensionList.map((extension) => {
                return (
                  <div key={extension.id} className="extension_box">
                    {extension.name}
                    <button
                      id={extension.id}
                      onClick={() => deleteExtension(extension.id)}
                      className="extension_close_btn"
                    >
                      x
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileExtensionSetting;
