import React from 'react';

class DataEntry extends React.Component {
  render() {
    return (
      <div>
        <div className='form-group row'>
          <div className='form-check col text-right'>
            <input
              className='form-check-input'
              id='theme'
              type='checkbox'></input>
            <label className='form-check-label' htmlFor='theme'>
              Dark Theme
            </label>
          </div>
        </div>

        <div className='row form-group'>
          <button className='btn btn-success mx-auto'>Add Data</button>
        </div>

        <div>
          <table class='table'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>First</th>
                <th scope='col'>Last</th>
                <th scope='col'>Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DataEntry;
