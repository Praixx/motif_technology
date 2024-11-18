function FooterList({children, navList}) {
    return (
        <div>
            <h4 className="capitalize font-semibold">{children}</h4>
            <ul>
            {navList.map(list => (
                <li className="font-light hover:text-blue-400 cursor-pointer text-sm pb-1">{list.listTitle}</li>
            ))}
            </ul>
    </div>
    )
}

export default FooterList
