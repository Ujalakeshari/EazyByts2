@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    // Add custom queries if needed
}

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}

@Repository
public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {
    // Add custom queries if needed
}
