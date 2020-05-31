import React from 'react';

/* #region NOTE */
// //const withData = WrappedComponent => {
// //  class WithData extends React.Component {
// //    constructor(props) {
// //      super(props);
//
// //      this.state = {
// //        data: []
// //      };
// //    }
//
// //    componentDidMount() {
// //      setTimeout(() => {
// //        fetch(this.props.dataSource)
// //          .then(response => response.json())
// //          .then(data => this.setState({ data: data.slice(0, 3) }));
// //      }, 1500);
// //    }
//
// //    render() {
// //      const { dataSource, ...otherProps } = this.props;
//
// //      return this.state.data.length < 1 ? (
// //        <h1>LOADING</h1>
// //      ) : (
// //        <WrappedComponent data={this.state.data} {...otherProps} />
// //      );
// //    }
// //  }
//
// //  return WithData;
// //};
/* #endregion */

// const withData = (WrappedComponent, dataSource) => {
const withData = (WrappedComponent) => {
  class WithData extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      setTimeout(() => {
        // instead of usign dataSource as an argument in the withData HOC,
        // we could pass in dataSource as a prop into the WrappedComponent
        // and leverage dataSource from the props
        fetch(this.props.dataSource)
          .then((res) => res.json())
          .then((data) => this.setState({ data: data.slice(0, 3) }));
      }, 1500);
    }

    render() {
      return this.state.data.length < 1 ? (
        <h1>LOADING</h1>
      ) : (
        // we'll get access to the data in the WrappedComponent, because I am
        // passing it into the component, from the props that were determined
        // in the HOC above
        <WrappedComponent data={this.state.data} {...this.props} />
      );
    }
  }

  return WithData;
};

export default withData;
