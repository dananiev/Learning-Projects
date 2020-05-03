class ClassFriendStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOnline: null };
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    componentDidMount() {
        ChatAPI.subscribeToFriendStatus(
            this.props.friend.id,
            this.handleStatusChange
        );
    }

    componentWillUnmount() {
        ChatAPI.unsubscribeToFriendStatus(
            this.props.friend.id,
            this.handleStatusChange
        );
    }

    handleStatusChange(status) {
        this.setState({
            isOnline: status.isOnline
        });
    }

    render() {
        if (this.state.isOnline === null) {
            return 'Loading...';
        }
        return this.state.isOnline ? 'Online' : 'Offline';
    }
}

export default ClassFriendStatus