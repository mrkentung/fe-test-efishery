import { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from './redux/actions'

import './App.css'
import Table from '../src/components/Table'

function App(props) {
  useEffect(() => {
    props.getFish()
  });

  const { fishData, addFish } = props

  return (
    <div className="App">
      <header className="bg-green-400">
        <div className="w-full container mx-auto">
          <img src="https://www.efishery.com/uploads/images/logo/4e250933d7f7fe68a5c16700b61a4cfc.png" className="w-1/6 mx-auto" alt="logo" />
        </div>
      </header>
      <div className="max-w-screen-xl mx-auto py-16">
        <div className="shadow-md p-4">
          <div className="flex flex-col">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <Table 
                data={fishData}
                addFishData={addFish}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  fishData: state.fishData
})

export default connect(mapStateToProps, actions)(App);
