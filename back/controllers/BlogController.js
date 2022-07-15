
//import models
import BlogModel from "../models/BlogModel.js";

//** Method Crud**/

//View all blog
export const getAllBlogs = async (req, resp) => {
    try {
        const blogs = await BlogModel.findAll();
        resp.json(blogs);
    } catch (error) {
        resp.json({ message: error.message });
    }
}
//View a blog
export const getBlog = async (req, resp) => {
    try {
        const blog = await BlogModel.findAll({
            where: { id: req.params.id }
        });
        resp.json(blog[0]);
    } catch (error) {
        resp.json({ message: error.message });
    }
}
//Create a blog
export const createBlog = async (req, resp) => {
    try {
        await BlogModel.create(req.body);
        resp.json({
            message: "Registro creado correctamente"
        })
    } catch (error) {
        resp.json({ message: error.message });
    }
}

//Update a blog
export const updateBlog = async (req, resp) => {
    try {
        await BlogModel.update(req.body, { where: { id: req.params.id } });
        resp.json({
            message: "Registro actualizado correctamente"
        })
    } catch (error) {
        resp.json({ message: error.message });
    }
}

//Delete a blog
export const deleteBlog = async (req, resp) => {
    try {
        await BlogModel.destroy({ where: { id: req.params.id } });
        resp.json({
            message: "Registro eliminado correctamente"
        })
    } catch (error) {
        resp.json({ message: error.message });
    }
}