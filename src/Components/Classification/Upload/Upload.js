import React from "react";

const Upload = (props) => {

  const { onUpload, change } = props;
  return (
    <div className="card max-w-screen  bg-base-100 shadow-xl">
      <div className="card-body  items-center text-center">
        <form onSubmit={onUpload} className="my-auto">
          <div className="form-control w-full max-w-xs">
            
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
              name="file"
              placeholder="Pick a file"
              onChange={change}
            />
            
          </div>

          <div>
            <input type='submit' className="btn btn-success mt-10" value='Upload' />
          </div>
        </form>
      </div>
    </div>

  );
};

export default Upload;
