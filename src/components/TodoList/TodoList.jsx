export const TodoList = ({ list, onDeleteTodo, onChangeTodoStatus }) => {
    return (
        <div>
            {list.map((item, i) => {
                return (
                    <TodoItem 
                        item={item} 
                        key={item.id} 
                        onDelete={() => onDeleteTodo(item.id)} 
                        onChangeStatus={() => onChangeTodoStatus(i)} 
                    />
                )
            })}
        </div>
    );
};

const TodoItem = ({ item, onDelete, onChangeStatus }) => {
    return (
        <div style={{
            display: "flex", 
            flexDirection: "row", 
            width:"80%",
            justifyContent:"space-between", 
            marginBottom: "4px",
            height: "40px"
        }}>
            <p 
                style={{ 
                    userSelect: "none", 
                    cursor: "pointer", 
                    textAlign: "center",
                    width: "70%",
                    borderStyle:"solid",
                    margin: 0,
                    borderWidth: 1,
                    marginRight: "4px",
                    textDecoration: item.resolved ? "line-through" : "none",
                    backgroundColor: item.resolved ? "gray" : "white",
                }}
                onClick={onChangeStatus}
            >
                {item.label}
            </p>
            <button style={{ width: "30%" }} onClick={onDelete}>Delete</button>
        </div>
    );
}