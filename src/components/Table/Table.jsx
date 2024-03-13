import jsonData from '../../posts.json';

console.log(jsonData);

const Table = () => {
    return (
        <>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jsonData && jsonData.length > 0 ? (
                            <>
                                {jsonData.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.title}</td>
                                            <td>{item.body}</td>
                                        </tr>
                                    );
                                })}
                            </>
                        ) : (
                            <>
                                <tr>
                                    <td>Not found users</td>
                                </tr>
                            </>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Table;
