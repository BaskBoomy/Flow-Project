import { useRef, useState } from "react";
import { Modal } from "../../commons/components/modals/modal";
import FileExtensionList from "../fileExtensionList/fileExtensionList";

export const FileExtensionSetting = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [defalutExtensionList, SetDefaultExtensionList] = useState([
    { id: 1, name: "bat" },
    { id: 2, name: "cmd" },
    { id: 3, name: "com" },
    { id: 4, name: "cpl" },
    { id: 5, name: "exe" },
    { id: 6, name: "scr" },
    { id: 6, name: "js" },
  ]);
  const [addedExtensionList, setAddedExtensionList] = useState([
    { id: 1, name: "sh" },
    { id: 2, name: "sh" },
    { id: 3, name: "sh" },
    { id: 4, name: "sh" },
    { id: 5, name: "sh" },
    { id: 6, name: "sh" },
  ]);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const addExtension = () => {
    const list = [...addedExtensionList];
    list.push({ id: 23, name: inputRef.current.value });
    setAddedExtensionList(list);
  };

  const deleteExtension = (id) => {
    const list = addedExtensionList.filter((extension) => extension.id !== id);
    setAddedExtensionList(list);
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
                <input key={extension.id} type="checkbox" className="chk" />
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
            {addedExtensionList &&
              addedExtensionList.map((extension) => {
                return (
                  <div key={extension.id} className="extension_box">
                    {extension.name}
                    <button
                      id={extension.id}
                      //   onClick={deleteExtension}
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
