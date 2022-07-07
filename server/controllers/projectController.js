/**
 * @desc    Get All Projects
 * @route   GET /api/v1/projects
 * @access  Private
 */
const getProjects = async (req, res) => {
  res.send('Get all Project');
};

/**
 * @desc    Create New Project
 * @route   POST /api/v1/projects
 * @access  Private
 */
const createProject = async (req, res) => {
  res.send('Create Project');
};

/**
 * @desc    Update Project
 * @route   PATCH /api/v1/project/:id
 * @access  Private
 */
const updateProject = async (req, res) => {
  res.send('Update Project');
};

/**
 * @desc    Delete Project
 * @route   DELETE /api/v1/project/:id
 * @access  Private
 */
const deleteProject = async (req, res) => {
  res.send('Delete Project');
};

/**
 * @desc    Show Stats
 * @route   GET /api/v1/project/stats
 * @access  Private
 */
const showStats = async (req, res) => {
  res.send('Show Stats');
};

export { getProjects, createProject, updateProject, deleteProject, showStats };
