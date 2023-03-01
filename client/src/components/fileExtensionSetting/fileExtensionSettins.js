import { useEffect, useRef, useState } from "react";
import { Modal } from "../../commons/components/modals/modal";
import FileExtensionList from "../fileExtensionList/fileExtensionList";

export const FileExtensionSetting = ({ ExtensionBlockRepository }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [extensionList, setExtensionList] = useState([]);
  const [defalutExtensionList, setDefaultExtensionList] = useState([]);
  const [customExtensionList, setCustomExtensionList] = useState([]);
  const inputRef = useRef("");

  useEffect(() => {
    ExtensionBlockRepository.getExtensionList().then((data) => {
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
  const inputTextHandler = ({ target }) => {
    console.log(target.value);
    if (target.value.length > 5) {
      alert("확장자의 최대 길이는 20자리입니다.");
      return;
    }
  };
  const addExtension = () => {
    if (inputRef.current.value === "") {
      alert("확장자를 입력해주세요.");
      return;
    }
    ExtensionBlockRepository.addExtension({
      name: inputRef.current.value,
      isBlocked: true,
      isCustom: true,
    }).then((data) => {
      if (data.code !== 200) {
        alert(data.message);
      }
    });
  };

  const deleteExtension = (id) => {
    if (window.confirm("삭제하시겠습니까?")) {
      ExtensionBlockRepository.deleteExtension(id);
    }
  };
  const updateExtension = (extension) => {
    //db에 차단 확장자 수정
    ExtensionBlockRepository.updateExtension({
      id: extension.id,
      name: extension.name,
      isBlocked: !extension.isBlocked,
    }).then((data) => {
      console.log(data);
    });
  };
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
                <label htmlFor={`extension${extension.id}`}>
                  <input
                    id={`extension${extension.id}`}
                    key={extension.id}
                    type="checkbox"
                    className="chk"
                    checked={extension.isBlocked}
                    onChange={() => updateExtension(extension)}
                  />
                  {extension.name}
                </label>
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
              maxLength="5"
              onChange={inputTextHandler}
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
              <FileExtensionList
                ExtensionBlockRepository={ExtensionBlockRepository}
              />
            </Modal>
          </div>
          <div className="box_list">
            {customExtensionList.map((extension) => {
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
            <div className="floatBox">{customExtensionList.length}/200</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileExtensionSetting;
